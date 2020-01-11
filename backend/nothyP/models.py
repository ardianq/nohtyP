from django.db import models


class PokemonTrainer(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    gender = models.BooleanField()
    age = models.PositiveSmallIntegerField(default=10)
    height = models.FloatField(null=True)
    weight = models.FloatField(null=True)


class Region(models.Model):
    name = models.TextField()
    capital = models.TextField()
    population = models.PositiveSmallIntegerField()
    professor = models.TextField()


class Pokemon(models.Model):
    class TypeChoices(models.TextChoices):
        NORMAL = 'a', 'normal'
        FIRE = 'b', 'fire'
        FIGHTING = 'c', 'fighting'
        WATER = 'd', 'water'
        FLYING = 'e', 'flying'
        GRASS = 'f', 'grass'
        POISON = 'g', 'poison'
        ELECTRIC = 'h', 'electric'
        GROUND = 'i', 'ground'
        PSYCHIC = 'j', 'psychic'
        ROCK = 'k', 'rock'
        BUG = 'l', 'bug'
        DRAGON = 'm', 'dragon'
        GHOST = 'n', 'ghost'
        DARK = 'o', 'dark'
        STEEL = 'p', 'steel'
        FAIRY = 'q', 'fairy'

    name = models.TextField()
    type = models.CharField(choices=TypeChoices.choices, max_length=1)
    level = models.PositiveSmallIntegerField(default=1)
    gender = models.BooleanField()
    pokemon_trainer = models.ForeignKey(PokemonTrainer, on_delete=models.CASCADE)
    region = models.ManyToManyField(Region)
