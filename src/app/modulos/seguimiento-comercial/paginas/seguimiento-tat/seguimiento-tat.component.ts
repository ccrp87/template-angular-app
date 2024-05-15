import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SeguimientoTatService } from "../../servicios/seguimiento-tat.service";
import { SeguimientoVendedorModel } from "../../modelos/SeguimientoVendedor.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-seguimiento-tat",
  templateUrl: "./seguimiento-tat.component.html",
  styleUrl: "./seguimiento-tat.component.css"
})
export class SeguimientoTATComponent implements AfterViewInit {
  AdvancedMarkerElement: any;
  displayedColumns: string[] = ["numeroOrden","fecha", "codigoCliente",  "cliente", "novedad", "valor", "latitud", "longitud"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public seguimientosVendedor = new MatTableDataSource<SeguimientoVendedorModel>([]);
  private lastMarket!:ElementRef;
  constructor(private seguimientoService: SeguimientoTatService, private snackBar: MatSnackBar,private el: ElementRef,private renderer: Renderer2, private changeDetector: ChangeDetectorRef) {}

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


  toggleHighlight(markerView: any) {

    console.log(this.el.nativeElement.querySelectorAll('.highlight'))

    for (let index = 0; index < this.el.nativeElement.querySelectorAll('.highlight')?.length; index++) {
      this.renderer.removeClass(this.el.nativeElement.querySelectorAll('.highlight')[index],".highlight")
    }


    if (this.properties[markerView].class.includes("highlight")) {
      console.log(this.lastMarket)
      this.renderer.setStyle(this.lastMarket,"z-index","0")
      this.properties[markerView].class = this.properties[markerView].class.replace("highlight", "");
  
    } else {
      this.properties[markerView].class += " highlight";
      setTimeout(() => {
        this.lastMarket = this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.el.nativeElement.querySelector('.highlight'))))
        this.renderer.setStyle(this.lastMarket,"z-index","3");
      }, 100);
    }

  }

  buildContent(marker: SeguimientoVendedorModel, order: number) {
    const content = document.createElement("div");

    content.innerHTML = `
    <div class="property ${marker.class}" style="z-index:${marker.zindex}">

    <div class="icon" ><i aria-hidden="true" class="fa fa-${marker.type}" title="${marker.type}"></i>
      
        <span class="number-icon">${order}</span>
    </div>
    <div class="details">
        <div class="price">${marker.nombreCliente}</div>
        <div class="address">Código cliente: ${marker.codigoCliente}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa-regular fa-clock fa-lg clock" title="bedroom">1</i>
            <span class="fa-sr-only">clock</span>
            <span>${marker.fecha.substring(10,19)}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bars fa-lg bars" title="tipo"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${marker.novedad}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-dollar-sign fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${marker.valor}</span>
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
      this.changeDetector.detectChanges();
      this.vertices = seguimientos.map(seguimiento => ({ lat: Number.parseFloat(seguimiento.latitud), lng: Number.parseFloat(seguimiento.longitud) }));
      this.properties = seguimientos.map(seguimiento => {
        seguimiento.position = { lat: Number.parseFloat(seguimiento.latitud), lng: Number.parseFloat(seguimiento.longitud) };
        seguimiento.class = "";
        seguimiento.type = seguimiento.tipo == "Visita" ? "home" : "bookmark";
        return seguimiento;
      });
    this.seguimientosVendedor.paginator = this.paginator;

    });
  }

  ngAfterViewInit() {
    console.log(this.paginator);
    
  }
}
