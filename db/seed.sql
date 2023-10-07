\encoding UTF8

-- Ejemplos de valores para GenerosPeliculas
\c modulos_uni_antioquia
INSERT INTO
    GenerosPeliculas (Nombre, Estado, Descripcion)
VALUES
    (
        'Drama',
        'Activo',
        'Peliculas centradas en conflictos emocionales.'
    ),
    (
        'Comedia',
        'Activo',
        'Peliculas humoristicas y ligeras.'
    ),
    (
        'Ciencia Ficcion',
        'Activo',
        'Peliculas con elementos de ciencia ficcion.'
    ),
    (
        'Accion',
        'Activo',
        'Peliculas llenas de accion y aventuras.'
    ),
    (
        'Romance',
        'Activo',
        'Peliculas que exploran relaciones romanticas.'
    );

-- Ejemplos de valores para Director
INSERT INTO
    Director (Nombre, Estado)
VALUES
    ('Steven Spielberg', 'Activo'),
    ('Christopher Nolan', 'Activo'),
    ('Quentin Tarantino', 'Activo'),
    ('Martin Scorsese', 'Activo'),
    ('James Cameron', 'Activo');

-- Ejemplos de valores para Productora
INSERT INTO
    Productora (Nombre, Estado, Slogan, Descripcion)
VALUES
    (
        'Warner Bros. Pictures',
        'Activo',
        'Entertainment for the World',
        'Productora lider en la industria del entretenimiento.'
    ),
    (
        'Universal Pictures',
        'Activo',
        '100 Years of Movie Memories',
        'Una de las principales productoras de cine en Hollywood.'
    ),
    (
        'Paramount Pictures',
        'Activo',
        'The Magic of Movies',
        'Productora con una larga historia en el cine.'
    ),
    (
        '20th Century Studios',
        'Activo',
        'The Walt Disney Studios',
        'Parte de Disney y conocida por peliculas iconicas.'
    ),
    (
        'Sony Pictures',
        'Activo',
        'Great Stories Start Here',
        'Productora de una variedad de géneros cinematograficos.'
    );

-- Ejemplos de valores para TipoMultimedia
INSERT INTO
    TipoMultimedia (Nombre, Descripcion)
VALUES
    (
        'Pelicula',
        'Tipo de contenido multimedia que se proyecta en una pantalla.'
    ),
    (
        'Serie de TV',
        'Una serie de episodios de television relacionados.'
    ),
    (
        'Documental',
        'Produccion audiovisual que presenta informacion real.'
    ),
    ('Cortometraje', 'Pelicula de corta duracion.'),
    (
        'Trailer',
        'Video promocional de una pelicula o serie.'
    );

-- Ejemplos de valores para Media
INSERT INTO
    Media (
        Titulo,
        Sinopsis,
        URL,
        AnioEstreno,
        GeneroID,
        DirectorID,
        ProductoraID,
        TipoID
    )
VALUES
    (
        E'Pulp Fiction',
        E'Una pelicula de Quentin Tarantino.',
         E'http://ejemplo.com/pulp-fiction', 
         1994,
         5,
         3,
         2,
         1
     ),
     (
         E'Titanic', 
         E'Una pelicula de James Cameron.', 
         E'http://ejemplo.com/titanic', 
         1997,
         1,
         5,
         1,
         1
     ),
     (
         E'Inception', 
         E'Una pelicula de Christopher Nolan.', 
         E'http://ejemplo.com/inception', 
         2010,
         3,
         2,
         2,
         1
     ),
     (
         E'Jurassic Park', 
         E'Una pelicula de Steven Spielberg.', 
         E'http://ejemplo.com/jurassic-park', 
         1993,
         3,
         1,
         2,
         1
     ),
     (
          E'The Godfather', 
          E'Una pelicula de Francis Ford Coppola.', 
          E'http://ejemplo.com/the-godfather', 
          1972,
          1,
          4,
          3,
          1
      );
