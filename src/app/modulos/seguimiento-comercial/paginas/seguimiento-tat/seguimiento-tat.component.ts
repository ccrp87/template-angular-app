import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ChangeDetectorRef } from "@angular/core";
import { map } from "rxjs";

@Component({
  selector: "app-seguimiento-tat",
  templateUrl: "./seguimiento-tat.component.html",
  styleUrl: "./seguimiento-tat.component.css"
})
export class SeguimientoTATComponent implements AfterViewInit, OnInit {
  AdvancedMarkerElement: any;

  constructor(private elementRef: ElementRef) {}
  async ngOnInit(): Promise<void> {}
  /**Maps */
  get testEl() {
    return document.querySelector(".property");
  }
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  vertices: google.maps.LatLngLiteral[] = [{ lat: 13, lng: 13 }, { lat: -13, lng: 0 }, { lat: 13, lng: -13 }];

  polylineOptions: google.maps.PolylineOptions = {
    path: this.vertices,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  };

  public properties: any = [
    {
      address: "215 Emily St, MountainView, CA",
      description: "Single family house with modern design",
      price: "$ 3,889,000",
      type: "home",
      bed: 5,
      bath: 4.5,
      size: 300,
      class: "property",
      position: {
        lat: parseFloat("13"),
        lng: parseFloat("13"),
        altitude: 3
      }
    },
    {
      address: "108 Squirrel Ln &#128063;, Menlo Park, CA",
      description: "Townhouse with friendly neighbors",
      price: "$ 3,050,000",
      type: "building",
      bed: 4,
      bath: 3,
      size: 200,
      class: "property",
      position: {
        lat: -13,
        lng: 0
      }
    },
    {
      address: "100 Chris St, Portola Valley, CA",
      description: "Spacious warehouse great for small business",
      price: "$ 3,125,000",
      type: "warehouse",
      bed: 4,
      bath: 4,
      size: 800,
      class: "property highlight",
      position: {
        lat: 13,
        lng: -13
      }
    }
  ];
  handleDomChange(event: any) {
    console.log(event);
  }

  toggleHighlight(markerView: any) {
    if (this.properties[markerView].class.includes("highlight")) {
      this.properties[markerView].class = this.properties[markerView].class.replace("highlight", "");
      // markerView.zIndex = null;
    } else {
      this.properties[markerView].class += " highlight";
      // markerView.zIndex = 1;
    }
    // this.ref.detectChanges();

    console.log(this.properties[markerView]);
  }

  buildContent(property: any) {
    const content = document.createElement("div");

    content.innerHTML = `
    <div class="property ${property.class}" >
    <div class="icon" ><i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    </div>
    `;
    return content;
  }

  /**Maps end */

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
  { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
  { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
  { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
  { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
  { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
  { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
  { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
  { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
  { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
