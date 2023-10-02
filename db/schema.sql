drop DATABASE if EXISTS modulos_uni_antioquia;

CREATE DATABASE modulos_uni_antioquia;

\c modulos_uni_antioquia 

CREATE TABLE GenerosPeliculas (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp,
    Descripcion TEXT
);

CREATE OR REPLACE FUNCTION update_changetimestamp_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.FechaActualizacion = now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_ab_changetimestamp BEFORE UPDATE ON GenerosPeliculas FOR EACH ROW EXECUTE PROCEDURE  update_changetimestamp_column();

-- Repite este proceso para las otras tablas: Director, Productora, TipoMultimedia, Media

CREATE TABLE Director (
    ID SERIAL PRIMARY KEY,
    Nombres VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp
);

CREATE TRIGGER update_ab_changetimestamp BEFORE UPDATE ON Director FOR EACH ROW EXECUTE PROCEDURE  update_changetimestamp_column();

CREATE TABLE Productora (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) CHECK (Estado IN ('Activo', 'Inactivo')) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp,
    Slogan VARCHAR(255),
    Descripcion TEXT
);

CREATE TRIGGER update_ab_changetimestamp BEFORE UPDATE ON Productora FOR EACH ROW EXECUTE PROCEDURE  update_changetimestamp_column();

CREATE TABLE TipoMultimedia (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp,
    Descripcion TEXT
);

CREATE TRIGGER update_ab_changetimestamp BEFORE UPDATE ON TipoMultimedia FOR EACH ROW EXECUTE PROCEDURE  update_changetimestamp_column();

CREATE TABLE Media (
    Serial SERIAL PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Sinopsis TEXT,
    URL VARCHAR(255) UNIQUE NOT NULL,
    ImagenPortada TEXT,
    FechaCreacion TIMESTAMPTZ DEFAULT current_timestamp,
    FechaActualizacion TIMESTAMPTZ DEFAULT current_timestamp,
    AnioEstreno INT,
    GeneroID INT REFERENCES GenerosPeliculas(ID) ON DELETE RESTRICT,
    DirectorID INT REFERENCES Director(ID) ON DELETE RESTRICT,
    ProductoraID INT REFERENCES Productora(ID) ON DELETE RESTRICT,
    TipoID INT REFERENCES TipoMultimedia(ID) ON DELETE RESTRICT
);

CREATE TRIGGER update_ab_changetimestamp BEFORE UPDATE ON Media FOR EACH ROW EXECUTE PROCEDURE  update_changetimestamp_column();
