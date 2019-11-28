let nombreIngresado = document.getElementById("nombre")
let nombresito= "Cristhian"

nombreIngresado.innerText= nombresito

let configuracion = {
    "language":{
        "decimal":        "",
        "emptyTable":     "No hay datos disponibles en la tabla",
        "info":           "Mostrando _START_ al _END_ de _TOTAL_ registros",
        "infoEmpty":      "Mostrando 0 al 0 de 0 eresgistros",
        "infoFiltered":   "(filtrado de _MAX_ registros en total)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Mostrando _MENU_ Registros",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search":         "Buscar:",
        "zeroRecords":    "No se encontraron coincidencias",
        "paginate": {
            "first":      "Primero",
            "last":       "Ultimo",
            "next":       "Siguiente",
            "previous":   "Anterior"
        },
        "aria": {
            "sortAscending":  ": activate to sort column ascending",
            "sortDescending": ": activate to sort column descending"
        }
    }
}
$('#myTable').DataTable(configuracion);

// configurando datatable 2 con datos en JS

let datos2 = [
    {
      "name": "1",
      "position": "System Architect",
      "salary": "$3,120",
      "start_date": "2011/04/25",
      "office": "Edinburgh",
      "extn": "5421",
      "asd": "5421"
    },


  ]

  $("#myTableJson").DataTable({
    language: configuracion.language,
    data: datos2,
    columns: [
      { title: "Nombre", data: "name" },
      { title: "Cargo", data: "position" },
      { title: "Sueldo", data: "salary" },
      { title: "Fecha de Inicio", data: "start_date" },
      { title: "Oficina", data: "office" },
      { title: "Extensión", data: "extn" },
      { title: "Extensión", data: "asd" },
    ]
  })