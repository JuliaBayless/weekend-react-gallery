-- db name react_gallery

CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80) NOT NULL,
    "description" VARCHAR(120),
    "likes" INT,
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES 
('images/Husband.jpeg', 'Pic of my hubs and I.', 0),
('images/familia.jpeg', 'Pic de mis hermanos y mi nana.', 0),
('images/MexicoCity.jpeg', 'My favorite city on the planet... Ciudad de Mèxico.', 0),
('images/Spice.jpeg', 'The open market in Dubai sell spice in Bulk!', 0),
('images/Dubai.jpeg', 'Grand Mosque in Abu Dhabi!', 0),
('images/Westin.jpeg', 'My pup Westin!', 0),
('images/Becker.jpeg', 'My big boy Becker <3', 0);
