var site = document.getElementById("site");
var product = document.getElementById("product");

window.onload = defult();

function defult() {
  site.style.display = "none";
  product.style.display = "block";
}

function sites() {
  site.style.display = "block";
  product.style.display = "none";
}

function produ() {
  product.style.display = "block";
  site.style.display = "none";
}
// ====================================================
// ====================Product=========================
// ====================================================
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");
var productbody = document.getElementById("productbody");
var container;
var btnadd = document.getElementById("btnadd");
var btnupdate = document.getElementById("btnupdate");
var indexOf = 0;
var alert;
var search = document.getElementById("search");

var productS;

if (localStorage.getItem("product") != null) {
  productS = JSON.parse(localStorage.getItem("product"));
  display();
} else {
  productS = [];
}

function addproduct() {
  if (
    validInputs(productName, "nameNlert") &&
    validInputs(productPrice, "priceAlert") &&
    validInputs(productDesc, "descAlert")
  ) {
    var product = {
      name: productName.value,
      price: productPrice.value,
      desc: productDesc.value,
    };

    productS.push(product);
    localStorage.setItem("product", JSON.stringify(productS));
    console.log(productS);

    display();
    remove();
  }
}

function remove() {
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";

  btnadd.classList.replace("d-none", "d-block");
  btnupdate.classList.replace("d-block", "d-none");

  productName.classList.remove("is-valid");
  productName.classList.remove("is-invalid");

  productPrice.classList.remove("is-valid");
  productPrice.classList.remove("is-invalid");

  productDesc.classList.remove("is-valid");
  productDesc.classList.remove("is-invalid");

  alert.classList.add("d-none");
  document.getElementById("alllert").classList.add("d-none");
}

function display() {
  container = "";
  for (var i = 0; i < productS.length; i++) {
    container += `
    <tr>
              <td scope="col">${i + 1}</td>
              <td scope="col">${productS[i].name}</td>
              <td scope="col">${productS[i].price}</td>
              <td scope="col">${productS[i].desc}</td>
              <td scope="col"><button type="button" class="btn btn-outline-warning" onclick='setOfUpdate(${i})'data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
              <td scope="col"><button type="button" class="btn btn-outline-danger" onclick='deleteProduct(${i})'>Delete</button></td>
            </tr>
    `;
  }
  productbody.innerHTML = container;
}

function setOfUpdate(index) {
  if (btnupdate.classList.contains("d-none")) {
    btnadd.classList.replace("d-block", "d-none");
    btnupdate.classList.replace("d-none", "d-block");
  }
  productName.value = productS[index].name;
  productPrice.value = productS[index].price;
  productDesc.value = productS[index].desc;

  indexOf = index;
}

function update() {
  if (
    validInputs(productName, "nameNlert") &&
    validInputs(productPrice, "priceAlert") &&
    validInputs(productDesc, "descAlert")
  ) {
    var product = {
      name: productName.value,
      price: productPrice.value,
      desc: productDesc.value,
    };

    productS.splice(indexOf, 1, product);
    localStorage.setItem("product", JSON.stringify(productS));

    display();
    remove();
  }
}

function deleteProduct(i) {
  productS.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(productS));
  display();
}

function validInputs(elemnts, msg) {
  var text = elemnts.value;
  alert = document.getElementById(msg);
  var regex = {
    productName: /^[A-Z][a-z0-9]{2,8}$/,
    productPrice: /^[1-9][0-9]{1,5}$/,
    productDesc: /^(TV|Mobile|Screens|Electronic)$/i,
  };
  if (regex[elemnts.id].test(text) == true) {
    elemnts.classList.add("is-valid");
    elemnts.classList.remove("is-invalid");
    alert.classList.add("d-none");
    document.getElementById("alllert").classList.add("d-none");
    return true;
  } else {
    elemnts.classList.remove("is-valid");
    elemnts.classList.add("is-invalid");
    alert.classList.remove("d-none");
    document.getElementById("alllert").classList.remove("d-none");
  }
}

function searchc() {
  container = "";
  for (var i = 0; i < productS.length; i++) {
    if (productS[i].name.toLowerCase().includes(search.value.toLowerCase())) {
      container += `
        <tr>
                  <td scope="col">${i + 1}</td>
                  <td scope="col">${productS[i].name}</td>
                  <td scope="col">${productS[i].price}</td>
                  <td scope="col">${productS[i].desc}</td>
                  <td scope="col"><button type="button" class="btn btn-outline-warning" onclick='setOfUpdate(${i})'data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
                  <td scope="col"><button type="button" class="btn btn-outline-danger" onclick='deleteProduct(${i})'>Delete</button></td>
                </tr>
        `;
    }
  }
  productbody.innerHTML = container;
}

// ======================================================
// ==========================Site========================
// ======================================================

var siteName = document.getElementById("siteName");
var basic_url = document.getElementById("basic_url");

var btnAdd = document.getElementById("btnAdd");
var updatesite = document.getElementById("updatesite");

var siteCont;
var sitebody = document.getElementById("sitebody");

var indexOfsite;
var siteAlert;

var searchItem = document.getElementById("searchItem");

var siteS;

if (localStorage.getItem("site") != null) {
  siteS = JSON.parse(localStorage.getItem("site"));
  displaySite();
} else {
  siteS = [];
}

function siteadd() {
  if (
    validation(siteName, "siteAlert") &&
    validation(basic_url, "basicAlert")
  ) {
    var site = {
      siteName: siteName.value,
      basic_url: basic_url.value,
    };
    siteS.push(site);
    localStorage.setItem("site", JSON.stringify(siteS));

    displaySite();
    removedata();
  }
}

function removedata() {
  siteName.value = "";
  basic_url.value = "";

  btnAdd.classList.remove("d-none");
  updatesite.classList.add("d-none");

  siteName.classList.remove("is-valid");
  siteName.classList.remove("is-invalid");

  basic_url.classList.remove("is-valid");
  basic_url.classList.remove("is-invalid");

  siteAlert.classList.add("d-none");

  // document.getElementById("btnAdd").attributes[4].value = "";
  // document.getElementById("updatesite").attributes[4].value = "";
}

function displaySite() {
  siteCont = "";
  for (var i = 0; i < siteS.length; i++) {
    siteCont += `
    <tr>
              <td scope="col">${i + 1}</td>
              <td scope="col">${siteS[i].siteName}</td>
              <td scope="col"><button type="button" class="btn btn-outline-warning" onclick='setsite(${i})'>Update</button></td>
              <td scope="col"><button type="button" class="btn btn-primary"><a href="${
                siteS[i].basic_url
              }" target="_blank" class="text-decoration-none text-light">Visit</a></button></td>
              <td scope="col"><button type="button" class="btn btn-outline-danger" onclick='deletesite(${i})'>Delete</button></td>
            </tr>
    `;
  }
  sitebody.innerHTML = siteCont;
}

function setsite(index) {
  siteName.value = siteS[index].siteName;
  basic_url.value = siteS[index].basic_url;

  btnAdd.classList.add("d-none");
  updatesite.classList.remove("d-none");

  indexOfsite = index;
}

function updatesites() {
  if (
    validation(siteName, "siteAlert") &&
    validation(basic_url, "basicAlert")
  ) {
    var site = {
      siteName: siteName.value,
      basic_url: basic_url.value,
    };
    siteS.splice(indexOfsite, 1, site);
    localStorage.setItem("site", JSON.stringify(siteS));

    displaySite();
    removedata();
  }
}

function deletesite(i) {
  siteS.splice(i, 1);
  localStorage.setItem("site", JSON.stringify(siteS));

  displaySite();
  removedata();
}

function validation(e, msgIn) {
  var sittext = e.value;
  siteAlert = document.getElementById(msgIn);

  var siteRegex = {
    siteName: /^[A-Z][a-z0-9]{2,8}$/,
    basic_url:
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  };

  if (siteRegex[e.id].test(sittext) == true) {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
    siteAlert.classList.add("d-none");

    // ========================================================
    document.getElementById("btnAdd").attributes[4].value = "";
    document.getElementById("updatesite").attributes[4].value = "";
    // ========================================================

    return true;
  } else {
    e.classList.remove("is-valid");
    e.classList.add("is-invalid");
    siteAlert.classList.remove("d-none");

    // =============================================================
    document.getElementById("btnAdd").attributes[4].value = "modal";
    document.getElementById("updatesite").attributes[4].value = "modal";
    // =============================================================
  }
}

function seArch() {
  siteCont = "";

  for (var i = 0; i < siteS.length; i++) {
    if (
      siteS[i].siteName.toLowerCase().includes(searchItem.value.toLowerCase())
    ) {
      siteCont += `
    <tr>
              <td scope="col">${i + 1}</td>
              <td scope="col">${siteS[i].siteName}</td>
              <td scope="col"><button type="button" class="btn btn-outline-warning" onclick='setsite(${i})'>Update</button></td>
              <td scope="col"><button type="button" class="btn btn-primary"><a href="${
                siteS[i].basic_url
              }" target="_blank" class="text-decoration-none text-light">Visit</a></button></td>
              <td scope="col"><button type="button" class="btn btn-outline-danger" onclick='deletesite(${i})'>Delete</button></td>
            </tr>
    `;
    }
  }
  sitebody.innerHTML = siteCont;
}