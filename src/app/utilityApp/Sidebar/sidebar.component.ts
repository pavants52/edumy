import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector:'sidebar',
  templateUrl : './sidebar.component.html'
})

export class SidebarComponent {

  ngOnInit() {
    $( "#side-menu").unbind( "metisMenu" );
    $('#side-menu').metisMenu();

     // Minimalize menu
    $('.navbar-minimalize').click(function () {
        $("body").toggleClass("mini-navbar");
        this.SmoothlyMenu();
    });    
  } 
}
