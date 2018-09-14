<template>
  <div>
    <div class="nav-menu fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-dark navbar-expand-lg">
              <a class="navbar-brand" href="index.html"><img src="~/assets/logo-invert2.png" class="img-fluid" alt="logo"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item"> <a class="nav-link active" href="#home">HOME <span class="sr-only">(current)</span></a> </li>
                  <li class="nav-item"> <a class="nav-link" href="#keunggulan">KEUNGGULAN</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="#produk">PRODUK</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="#alur">ALUR KERJA</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="#contact">KAMI</a> </li>
                  <li class="nav-item"><a href="#" class="btn btn-outline-light my-3 my-sm-0 ml-lg-3">DEMO</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <nuxt/>
    <!-- // end .section -->
    <footer class="my-5 text-center">
        <!-- Copyright removal is not prohibited! -->
        <p class="mb-2"><small>COPYRIGHT © 2018. ALL RIGHTS RESERVED. BY DIGIGOV TEAM</small></p>

        <!-- <small>
            <a href="#" class="m-2">PRESS</a>
            <a href="#" class="m-2">TERMS</a>
            <a href="#" class="m-2">PRIVACY</a>
        </small> -->
    </footer>
  </div>
</template>
