import { Component, OnInit } from "@angular/core";
import { SeguridadService } from "./modulos/seguridad/servicios/seguridad.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent implements OnInit {
  constructor(private seguridadService: SeguridadService) {}
  ngOnInit(): void {
    if (!this.seguridadService.hasSessionActive() && !window.location.href.includes("seguridad/login")) {
      //window.location.href = 'seguridad/login';
    }
  }
  title = "meico-app-template";
}
