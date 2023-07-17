# Introducción
    API Rest elaborada a partir de:
        - NodeJS
        - TypeScript
        - GraphQL
        - Docker 
        - MySQL
    
    Permite operaciones CRUD, para operar dos tablas en la base de datos:
        - Películas
        - Actores
    Teniendo en consideración que cada película puede incluir a mas de un actor, y a su vez, cada actor podrá haber actuado en mas de una película.

    La aplicación se desarrolló mediante los principos de arquitectura basada en el patrón Modelo-Vista-Controlador(MVC) para poder organizar y mantener el código, respetando a su vez los principios SOLID para asegurar un diseño escalable y de calidad.

# Tecnologías
    - NodeJS: Entorno de ejecición de JavaScript del lado del servidor.
    - TypeSCript: Superset de JavaScript que añade tipado estático y otras características avanzadas.
    - GraphQL: Lenguaje de consultas y manipulación de datos utilizado para definir la API.
    - Swagger: Herramienta de documentación de APIs que permtie describir, visualizar y probar los endpoints de manera detallada
    . MongoDB

# Requerientos del Sistema
    Antes de comenzar a utlizar la aplicación, asegurarse de contar con la instalación previa de los siguientes elementos en el sistema:
        NodeJS: Versión X.X.X o superior.
        DOcker: Version X.X.X o superor(para utilizar los datos de MySQL a través de Docker Compose).

# Instalación y Configuración
    Sigue estos pasos para instalar y ejecutar la aplicación:

    Clona el repositorio en tu máquina local:
    git clone <URL_DEL_REPOSITORIO>

    Ve al directorio del proyecto:

    cd movie-application
    Instala las dependencias:
    npm install

    npm start
    La aplicación estará disponible en http://localhost:4000/graphql

    Uso
    Aquí tienes algunos ejemplos de consultas GraphQL que puedes realizar:

    Obtener todas las películas:

    graphql
    Copy code
    query GetAllMovies {
    movies {
        title
        description
        genre
        year
        productionCompany
        actors {
        id
        name
        }
    }
    }
    Obtener todos los actores:

    graphql
    Copy code
    query GetAllActors {
    actors {
        id
        name
        movies {
        title
        }
    }
    }
    Obtener una película por su ID:

    graphql
    Copy code
    query GetMovieById($id: ID!) {
    movie(id: $id) {
        title
        description
        genre
        year
        productionCompany
        actors {
        id
        name
        }
    }
    }
    Variables:

    json
    Copy code
    {
    "id": "64b5720f174021698b0ead4f"
    }