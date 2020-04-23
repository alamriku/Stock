<template>
  <div class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trade</router-link>

        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto">
            <router-link to="/portfolio" tag="li" class="nav-item" active-class="active"> <a class="nav-link">Portfolio</a></router-link>
            <router-link to="/stocks" tag="li" class="nav-item" active-class="active"> <a class="nav-link">Stocks</a></router-link>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item"><a href="" class="nav-link">End Day</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#" id="navbarDropdown"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                Save and Load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Save Data</a>
                <a class="dropdown-item" href="#">Load Data</a>

              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
