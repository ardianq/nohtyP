from rest_framework import serializers

from nothyP.models import Pokemon, PokemonTrainer, Region


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'


class PokemonTrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonTrainer
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'
