import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SeguimientoTatService } from "../../servicios/seguimiento-tat.service";
import { SelectModel } from "../../../../core/models/app/select.model";
import { SeguimientoVendedorModel } from "../../modelos/SeguimientoVendedor.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-seguimiento-tat",
  templateUrl: "./seguimiento-tat.component.html",
  styleUrl: "./seguimiento-tat.component.css"
})
export class SeguimientoTATComponent implements AfterViewInit {
  AdvancedMarkerElement: any;
  displayedColumns: string[] = ["fecha", "cliente", "novedad", "tipo", "latitud", "longitud"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public seguimientosVendedor = new MatTableDataSource<SeguimientoVendedorModel>([]);

  constructor(private seguimientoService: SeguimientoTatService, private snackBar: MatSnackBar) {}

  /**Maps */

  center: google.maps.LatLngLiteral = { lat: 11.008748, lng: -74.835449 };
  zoom = 12.43;
  vertices: google.maps.LatLngLiteral[] = [];

  polylineOptions: google.maps.PolylineOptions = {
    path: this.vertices,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  };

  public properties: SeguimientoVendedorModel[] = [];
  handleDomChange(event: any) {
    console.log(event);
  }

  toggleHighlight(markerView: any) {
    console.log(this.properties[markerView]);
    if (this.properties[markerView].class.includes("highlight")) {
      this.properties[markerView].class = this.properties[markerView].class.replace("highlight", "");
      // markerView.zIndex = null;
    } else {
      this.properties[markerView].class += " highlight";
      // markerView.zIndex = 1;
    }
    // this.ref.detectChanges();
  }

  buildContent(marker: SeguimientoVendedorModel, order: number) {
    const content = document.createElement("div");

    content.innerHTML = `
    <div class="property ${marker.class}" >

    <div class="icon" ><i aria-hidden="true" class="fa fa-${marker.type}" title="${marker.type}"></i>
      
        <span class="number-icon">${order}</span>
    </div>
    <div class="details">
        <div class="price">${marker.cliente}</div>
        <div class="address">${marker.novedad}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa-regular fa-clock fa-lg clock" title="bedroom">1</i>
            <span class="fa-sr-only">clock</span>
            <span>${marker.fecha}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span></span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span><sup>2</sup></span>
        </div>
        </div>
    </div>
    </div>
    `;
    return content;
  }

  /**Maps end */
  obtenerSeguientoVendedor(data: any) {
    if (data.vendedor == "") {
      this.snackBar.open("Seleccione un vendedor.", "", {
        verticalPosition: "bottom",
        horizontalPosition: "right",
        duration: 3000
      });
      return;
    }

    this.seguimientoService.obtenerSeguimientoVendedor(data.fechaCorte, data.vendedor).subscribe(seguimientos => {
      this.seguimientosVendedor = new MatTableDataSource<SeguimientoVendedorModel>(seguimientos);

      this.vertices = seguimientos.map(seguimiento => ({ lat: Number.parseFloat(seguimiento.latitud), lng: Number.parseFloat(seguimiento.longitud) }));
      this.properties = seguimientos.map(seguimiento => {
        seguimiento.position = { lat: Number.parseFloat(seguimiento.latitud), lng: Number.parseFloat(seguimiento.longitud) };
        seguimiento.class = "";
        seguimiento.type = seguimiento.tipo == "Visita" ? "bookmark" : "home";
        return seguimiento;
      });
    });
  }

  ngAfterViewInit() {
    this.seguimientosVendedor.paginator = this.paginator;
  }
}
