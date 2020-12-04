/*usuarios tipo cliente*/
db.usuarios.insertMany([
   {
         "nombre":"Carlos",
         "apellido":"Ramos",
         "correo":"carlos@gmail.com",
         "contrasena":"123",
         "telefono": "95449019",
         "pais":"Honduras",
         "estado":"Francisco Morazan",
         "codigoPostal":"11101",
         "ciudad":"Tegucigalpa",
         "direccion":"col. predios del recreo",
         "genero":"Masculino",
         "metodoPagos":[
            {
               "tipoPago":"1",
               "numeroTargeta": "4785123684529658",
               "propietario": "Carlos Ramos",
               "cvs": "654",
               "fechaVencimiento": {
                  "mes": "octubre",
                  "anio": "2022"
               },
               "datosFacturacion": {
                  "direccionF": "col. predios del recreo",
                  "ciudadF": "Tegucigalpa",
                  "estadoF": "Francisco Morazan",
                  "codigoPostalF": "11101",
                  "telefonoF": "95449019",
                  "paisF": "Honduras"
               }
            }
         ],
         "historialCompras": [
            {
               "cantidad": 2,
               "nombreProducto": "tenis Nike",
               "fechaCompra": "12-12-20",
               "metodoPago": "Targeta de debito",
               "precio": 15.99,
               "empresaVendioId": "",
               "nombreEmpresaVendido": "Nike Inc.",
               "tipoEnvio": "Free"
            }
         ]
   },
   {
         "nombre":"Alex",
         "apellido":"Pineda",
         "correo":"pineda12@gmail.com",
         "contrasena":"123",
         "telefono": "99568745",
         "pais":"Honduras",
         "estado":"Cortes",
         "codigoPostal":"11102",
         "ciudad":"San pedro sula",
         "direccion":"col. brisas del plan",
         "genero":"Masculino",
         "metodoPagos":[
            {
               "tipoPago":"2",
               "numeroTargeta": "4785123684556321",
               "propietario": "Alex Pineda",
               "cvs": "562",
               "fechaVencimiento": {
                  "mes": "mayo",
                  "anio": "2024"
               },
               "datosFacturacion": {
                  "direccionF": "col. brisas del plan",
                  "ciudadF": "San pedro sula",
                  "estadoF": "Cortes",
                  "codigoPostalF": "11102",
                  "telefonoF": "99568745",
                  "paisF": "Honduras"
               }
            }
         ],
         "historialCompras": [
            {
               "cantidad": 1,
               "nombreProducto": "PS4",
               "fechaCompra": "12-12-20",
               "metodoPago": "Targeta de debito",
               "precio": 249.99,
               "empresaVendioId": "",
               "nombreEmpresaVendido": "JetStereo",
               "tipoEnvio": "Free"
            },
            {
               "cantidad": 2,
               "nombreProducto": "Controles de ps4",
               "fechaCompra": "12-12-20",
               "metodoPago": "Targeta de credito",
               "precio": 120,
               "empresaVendioId": "",
               "nombreEmpresaVendido": "JetStereo",
               "tipoEnvio": "Free"
            }
         ]
   }
]);


/*administrador de plataforma*/
db.administrador.insertMany([
   {
         "nombre":"Jose",
         "apellido":"Perez",
         "correo":"joseperez12@gmail.com",
         "contrasena": "123",
         "usuarioPlataforma": "adminJose",
         "nivelPrioridad": "1"
         "planesAnadidos":[
            {
               "nombrePlan":"Free",
               "fechaEdicion": "12-12-20",
               "descripcion": "Plan de acceso gratuito con el cual cuentan todos los recien registrados de manera automatica.",
               "precio": 0
            }
         ],
         "plantillasAnadidas": [
            {
               "nombrePlantilla": "Ventas de electronicos",
               "descripcion": "Plantilla hecha exclusivamente para aquellas empresas que vendas productos electonicos."
               "html": '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>',
               "css": 'body{background-color:green}',
               "js": '',
               "recursos": [
                  {
                     "tipoRecurso": "imagen",
                     "rutaImagen": "../assets/img/administradores/imagen.png",
                     "nombre": "imagen 1",
                     "tamanio": "5mb"
                  }
                  {
                     "tipoRecurso": "video",
                     "rutaImagen": "../assets/videos/administradores/video.mp4",
                     "nombre": "video 1",
                     "tamanio": "20mb"
                  }
               ]
            }
         ]
   }
]);


/*Planes de plataforma*/
db.planesPlataforma.insertMany([
   {
      "nombrePlan":"Free",
      "fechaEdicion": "12-12-20",
      "descripcion": "Plan de acceso gratuito con el cual cuentan todos los recien registrados de manera automatica.",
      "precio": 0
   },
   {
      "nombrePlan":"Premium",
      "fechaEdicion": "12-12-20",
      "descripcion": "Plan mucho mas avanzado con muchas caracteristicas en edicion y creacion de sitios mas personalizados y el cual solo tiene un precio de tan solo $9.99/mes.",
      "precio": 9.99
   },
   {
      "nombrePlan":"Gold",
      "fechaEdicion": "12-12-20",
      "descripcion": "Plan que incluye todas las caracteristicas del premium y añade nuevas como lo es una publicidad personalizada dentro de la plataforma a tan solo $14.99/mes.",
      "precio": 14.99
   }
]);


/*Empresas inscritas en la plataforma*/
db.empresas.insertMany([
   {
         "nombre":"Mario",
         "apellido":"Gonzales",
         "correo":"mario@gmail.com",
         "contrasena":"123",
         "telefono": "98895632",
         "pais":"Honduras",
         "estado":"Francisco Morazan",
         "codigoPostal":"11101",
         "ciudad":"Tegucigalpa",
         "direccion":"col. predios del recreo",
         "genero":"Masculino",
         "datosEmpresa": {
            "nombreEmpresa": "JetStereo",
            "descripcionEmpresa": "Somos una empresa enfocada e la tecnologia y todo lo referente a ello."
            "direccionEmpresa": "col. suyapa frente a unah",
            "telefono": "22345698",
            "correoEmpresa": "jetstereo@gmail.com",
            "categoriaEmpresa": "Electronicos",
            "planObtenido": "Free"
         }
         "administracionRecursos": [
            {
               "tipoRecursos": "imagenes",
               "recursos": [
                  {
                     "nombre": "imagen 1",
                     "rutaImagen": "../assets/img/empresas/imagen1.png",
                     "tamanio": "2mb"
                  },
                  {
                     "nombre": "imagen 2",
                     "rutaImagen": "../assets/img/empresas/imagen2.png",
                     "tamanio": "2mb"
                  }
               ]
            },
            {
               "tipoRecursos": "videos",
               "recursos": [
                  {
                     "nombre": "video 1",
                     "rutaImagen": "../assets/videos/empresas/video1.mp4",
                     "tamanio": "20mb",
                     "duracion": "5min"
                  },
                  {
                     "nombre": "video 2",
                     "rutaImagen": "../assets/videos/empresas/video2.mp4",
                     "tamanio": "15mb",
                     "duracion": "2min"
                  }
               ]
            },
            {
               "tipoRecursos": "otros",
               "recursos": [
                  {
                     "nombre": "documento pdf",
                     "rutaImagen": "../assets/documentos/documento1.pdf",
                     "tamanio": "20mb"
                  }
               ]
            }
         ],
         "administracionPaginas": [
            {
               "principal": "true",
               "tituloPagina": "pagina 1",
               "descripcion": "Pagina principal de muestra de productos electronicos."
               "codigoHtml": '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>',
               "codigoCss": 'body{background-color:green}',
               "codigoJs": '',
               "anadirEncabezado": "true",
               "anadirFooter": "true"
            },
            {
               "principal": "false",
               "tituloPagina": "pagina 2",
               "descripcion": "Pagina secundaria de venta de productos electronicos al publico."
               "codigoHtml": '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>',
               "codigoCss": 'body{background-color:green}',
               "codigoJs": '',
               "anadirEncabezado": "true",
               "anadirFooter": "true"
            }
         ],
         "configuracionSitio": {
            "tituloSitio": "jetstereo",
            "descripcionSitio": "Portal de ventas en linea de dispositivos electronicos en Honduras.",
            "palabrasClaves": [
               "Electronica",
               "Ps5",
               "Xbox series x",
               "Tv"
            ],
            "logo": "../assets/img/empresas/logo1.png",
            "favico": "../assets/img/empresas/favico1.ico",
            "codigoExtraCss": 'body{background-color:green}',
            "codigoExtraJs": '',
            "encabezados": [
               {
                  "encabezado": "Inicio"
                  "subEncabezado": [
                     "Noticias",
                     "Categorias",
                     "Lo mas vendido"
                  ]
               },
               {
                  "encabezado": "Productos"
                  "subEncabezado": [
                     "Electronicos",
                     "Linea blanca",
                     "Computadoras"
                  ]
               }
            ],
            "footers": [
               {
                  "footer": "Sobre Nosotros"
                  "subFooter": [
                     "Historia",
                     "Parnerts"
                  ]
               },
               {
                  "footer": "Contactos"
                  "subFooter": [
                     "Emails",
                     "Telefonos",
                     "Soporte tecnico"
                  ]
               }
            ]
         },
         "registroCategorias": [
            {
               "nombreCategoria": "Video juegos",
               "fechaAnadio": "12-12-20",
               "descripcionCategoria": "Apartado exclusivamente para los gamers y para todos aquellos interesados en lo mas relevantes de los video juegos."
            },
            {
               "nombreCategoria": "Linea blanca",
               "fechaAnadio": "12-12-20",
               "descripcionCategoria": "Apartado de los mejores productos para el hogar."
            }
         ],
         "registroProductos": [
            {
               "nombreProductoAnadido": "PS5"
               "fechaAnadio": "12-12-20",
               "descripcionProducto": "Consola de quinta generacion de sony especial para gamers.",
               "precioProducto": 499,
               "imagenes": [
                  "../assets/img/empresas/ps5.png",
                  "../assets/img/empresas/ps52.png",
                  "../assets/img/empresas/ps53.png"
               ],
               "calificacionProducto": 5
            },
            {
               "nombreProductoAnadido": "lavadora samsung"
               "fechaAnadio": "12-12-20",
               "descripcionProducto": "lavadora de 48kg de la marca samsung con 7 modos de lavado.",
               "precioProducto": 399,
               "imagenes": [
                  "../assets/img/empresas/lavadora.png",
                  "../assets/img/empresas/lavadora2.png",
                  "../assets/img/empresas/lavadora3.png"
               ],
               "calificacionProducto": 4
            }
         ]
   }
]);


/*Categorias de plataforma*/
db.categoriasPlataforma.insertMany([
   {
      "nombreCategoria": "Video juegos",
      "fechaAnadio": "12-12-20",
      "descripcionCategoria": "Apartado exclusivamente para los gamers y para todos aquellos interesados en lo mas relevantes de los video juegos."
   },
   {
      "nombreCategoria": "Linea blanca",
      "fechaAnadio": "12-12-20",
      "descripcionCategoria": "Apartado de los mejores productos para el hogar."
   },
   {
      "nombreCategoria": "Ropa",
      "fechaAnadio": "12-12-20",
      "descripcionCategoria": "encuentra todo lo relacionado a la moda actual en ropa."
   }
]);