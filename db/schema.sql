drop DATABASE if EXISTS modulos_uni_antioquia;

CREATE DATABASE modulos_uni_antioquia;

\c modulos_uni_antioquia 

CREATE TABLE GenerosPeliculas (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp ON
    UPDATE
        current_timestamp,
        Descripcion TEXT
);

CREATE TABLE Director (
    ID SERIAL PRIMARY KEY,
    Nombres VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp ON
    UPDATE
        current_timestamp
);

CREATE TABLE Productora (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp ON
    UPDATE
        current_timestamp,
        Slogan VARCHAR(255),
        Descripcion TEXT
);

CREATE TABLE TipoMultimedia (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp ON
    UPDATE
        current_timestamp,
        Descripcion TEXT
);

CREATE TABLE Media (
    Serial SERIAL PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Sinopsis TEXT,
    URL VARCHAR(255) UNIQUE NOT NULL,
    ImagenPortada TEXT,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp ON
    UPDATE
        current_timestamp,
        AnioEstreno INT,
        GeneroID INT REFERENCES GenerosPeliculas(ID) ON DELETE RESTRICT,
        DirectorID INT REFERENCES Director(ID) ON DELETE RESTRICT,
        ProductoraID INT REFERENCES Productora(ID) ON DELETE RESTRICT,
        TipoID INT REFERENCES TipoMultimedia(ID) ON DELETE RESTRICT
);