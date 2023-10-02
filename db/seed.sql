-- Ejemplos de valores para GenerosPeliculas
\ c modulos_uni_antioquia
INSERT INTO
    GenerosPeliculas (Nombre, Estado, Descripcion)
VALUES
    (
        'Drama',
        'Activo',
        'Películas centradas en conflictos emocionales.'
    ),
    (
        'Comedia',
        'Activo',
        'Películas humorísticas y ligeras.'
    ),
    (
        'Ciencia Ficción',
        'Activo',
        'Películas con elementos de ciencia ficción.'
    ),
    (
        'Acción',
        'Activo',
        'Películas llenas de acción y aventuras.'
    ),
    (
        'Romance',
        'Activo',
        'Películas que exploran relaciones románticas.'
    );

-- Ejemplos de valores para Director
INSERT INTO
    Director (Nombres, Estado)
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
        'Productora líder en la industria del entretenimiento.'
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
        'Parte de Disney y conocida por películas icónicas.'
    ),
    (
        'Sony Pictures',
        'Activo',
        'Great Stories Start Here',
        'Productora de una variedad de géneros cinematográficos.'
    );

-- Ejemplos de valores para TipoMultimedia
INSERT INTO
    TipoMultimedia (Nombre, Descripcion)
VALUES
    (
        'Película',
        'Tipo de contenido multimedia que se proyecta en una pantalla.'
    ),
    (
        'Serie de TV',
        'Una serie de episodios de televisión relacionados.'
    ),
    (
        'Documental',
        'Producción audiovisual que presenta información real.'
    ),
    ('Cortometraje', 'Película de corta duración.'),
    (
        'Tráiler',
        'Video promocional de una película o serie.'
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
        'Pulp Fiction',
        'Una película de Quentin Tarantino.',
        'http://ejemplo.com/pulp-fiction',
        1994,
        5,
        3,
        2,
        1
    ),
    (
        'Titanic',
        'Una película de James Cameron.',
        'http://ejemplo.com/titanic',
        1997,
        1,
        5,
        1,
        1
    ),
    (
        'Inception',
        'Una película de Christopher Nolan.',
        'http://ejemplo.com/inception',
        2010,
        3,
        2,
        2,
        1
    ),
    (
        'Jurassic Park',
        'Una película de Steven Spielberg.',
        'http://ejemplo.com/jurassic-park',
        1993,
        3,
        1,
        2,
        1
    ),
    (
        'The Godfather',
        'Una película de Francis Ford Coppola.',
        'http://ejemplo.com/the-godfather',
        1972,
        1,
        4,
        3,
        1
    );