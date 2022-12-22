/**
 * The element whose id is app can be accessed from the document
 */
const container = document.getElementById("app");

/**
 * This function creates the navbar and writes it into the container
 */
export function renderNav() {
  container.innerHTML = `<nav class="navbar navbar-expand-lg m-2 bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;
}

/**
 * This function creates the content and inserts it into the container
 */
export function renderContent() {
  container.innerHTML += `<div class="p-3 mb-2 m-3 bg-primary text-white">.bg-primary</div>
    <div class="p-3 mb-2 mx-3 bg-secondary text-white">.bg-secondary</div>
    <div class="p-3 mb-2 mx-3 bg-success text-white">.bg-success</div>
    <div class="p-3 mb-2 mx-3 bg-danger text-white">.bg-danger</div>
    <div class="p-3 mb-2 mx-3 bg-warning text-dark">.bg-warning</div>
    <div class="p-3 mb-2 mx-3 bg-info text-dark">.bg-info</div>
    <div class="p-3 mb-2 mx-3 bg-light text-dark">.bg-light</div>`;
}

/**
 * This function creates the footer and inserts it into the container
 */
export function renderFooter() {
  container.innerHTML += `<footer class="d-flex flex-wrap justify-content-between aligin-items-center py-2 my-4 bg-dark mx-2">
  <p class="col-md-4 mt-2 ms-3 text-white">&copy; 2022 Company, Inc </p>
  <ul class="nav col-md-4 justify-content-end">
    <li class="nav-item">
      <a href="#" class="nav-link px-2 text-muted">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-2 text-muted">
        Features
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-2 text-muted">
        Pricing
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-2 text-muted">
        FAQs
      </a>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">
          About
        </a>
      </li>
    </li>
  </ul>
</footer>`;
}
