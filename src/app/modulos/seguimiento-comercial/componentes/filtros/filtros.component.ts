import { Component, EventEmitter, Input, OnInit, Output, output } from "@angular/core";
import { SelectModel } from "../../../../core/models/app/select.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { formatDate } from "@angular/common";
import { SeguimientoTatService } from "../../servicios/seguimiento-tat.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ExportFileService } from "../../../../core/services/utils/export-file.service";

@Component({
  selector: "seguimeinto-comercial-filtros",
  templateUrl: "./filtros.component.html",
  styleUrl: "./filtros.component.css"
})
export class FiltrosComponent implements OnInit {
  @Output() dataOut = new EventEmitter<any>();
  @Input() dataExport:any[]=[];
  public formFilter!: FormGroup;
  public supervisores: SelectModel[] = [];
  public vendedores: SelectModel[] = [];

  constructor(
    private filterFormBuilder: FormBuilder,
    private seguimientoService: SeguimientoTatService,
    private snackBar: MatSnackBar,
    private fileExporter: ExportFileService
  ) {}

  ngOnInit(): void {
    this.formFilter = this.filterFormBuilder.group({
      fechaCorte: [formatDate(Date.now(), "yyyy-MM-dd", "en"), Validators.required],
      supervisor: ["", Validators.required],
      vendedor: ["", Validators.required]
    });
    this.obtenerSupervisores();
  }
  /**
   * Obtiene un listado de supervisores
   */
  obtenerSupervisores() {
    this.seguimientoService.obtenerSupervisores().subscribe(supervisores => {
      this.supervisores = supervisores;
    });
  }

  /**
   * Obtiene un listado de vendedores
   */
  obtenerVendedores() {
    let codigoSupervisor = this.formFilter.value["supervisor"];

    if (codigoSupervisor == "") {
      this.snackBar.open("Seleccione un supervidor.", "", {
        verticalPosition: "bottom",
        horizontalPosition: "right",
        duration: 3000
      });
      this.vendedores = [];
      return;
    }

    this.seguimientoService.obtenerVendedores(codigoSupervisor).subscribe(vendedores => {
      this.vendedores = vendedores;
      this.formFilter.patchValue({ vendedor: "" });
    });
  }
  exportarComoCSV() {
    this.fileExporter.exportToCsv(
      this.dataExport,
      `seguimiento ${Date.now().toPrecision()}`
    );
  }
  outPutData() {
    this.dataOut.emit(this.formFilter.value);
  }
}
