import React , { Component } from 'react';

export default class Menu extends Component{
  render(){
    return(
      <nav id="navbar" class="navbar navbar-expand-lg navbar-light  nav-down navbar-u">
        <a class="navbar-brand menu-unica" href="#">ÚNICA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link menu-link" href="#">Identidad <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link menu-link" href="#">Relaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link menu-link" href="#">Estudios Bíblicos</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}