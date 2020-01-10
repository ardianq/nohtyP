# Generated by Django 3.0.2 on 2020-01-10 16:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PokemonTrainer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.TextField()),
                ('last_name', models.TextField()),
                ('gender', models.BooleanField()),
                ('age', models.PositiveSmallIntegerField(default=10)),
                ('height', models.FloatField(null=True)),
                ('weight', models.FloatField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('capital', models.TextField()),
                ('population', models.PositiveSmallIntegerField()),
                ('professor', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('type', models.CharField(
                    choices=[('a', 'normal'), ('b', 'fire'), ('c', 'fighting'), ('d', 'water'), ('e', 'flying'),
                             ('f', 'grass'), ('g', 'poison'), ('h', 'electric'), ('i', 'ground'), ('j', 'psychic'),
                             ('k', 'rock'), ('l', 'bug'), ('m', 'dragon'), ('n', 'ghost'), ('o', 'dark'),
                             ('p', 'steel'), ('q', 'fairy')], max_length=1)),
                ('level', models.PositiveSmallIntegerField(default=1)),
                ('gender', models.BooleanField()),
                ('pokemon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nothyP.Region')),
                ('pokemon_trainer',
                 models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nothyP.PokemonTrainer')),
            ],
        ),
    ]
