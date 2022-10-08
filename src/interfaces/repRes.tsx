
//hemos generado las interfaces directamente apartir de la aplicacion de
//la web https://app.quicktype.io/ ver video 21 ponemos en postman la url
//a utilizar y copiamos el Json con la aplicion web arriba mencionada pasa 
//directamente el archivo JSON a las respectivas interfaces para typescript


//finalmente lo hacemos de otra manera una vez instalado paste Json as Code de las extensiones de
//visual estudio copiamos el JSON del postman o de donde lo tengamos y luego vamos a la paleta con shift+command+p buscamos paste JSON as Code
//seleccionamos TypeScript ponemos el nombre que tendra la interface principal y pulsamos enter
//ver video 21

export interface ReqResListado {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}

export interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
