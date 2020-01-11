# post , get, patch, delete
# Create your views here.
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from nothyP.models import Pokemon, PokemonTrainer, Region
from nothyP.serializers import PokemonSerializer, PokemonTrainerSerializer, RegionSerializer


# GET
@swagger_auto_schema(method='GET', responses={200: PokemonSerializer(many=True)})
@api_view(['GET'])
def pokemon_list(request):
    pokemon = Pokemon.objects.all()
    serializer = PokemonSerializer(pokemon, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: PokemonTrainerSerializer(many=True)})
@api_view(['GET'])
def pokemontrainer_list(request):
    pokemontrainer = PokemonTrainer.objects.all()
    serializer = PokemonTrainerSerializer(pokemontrainer, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: RegionSerializer(many=True)})
@api_view(['GET'])
def region_list(request):
    region = Region.objects.all()
    serializer = RegionSerializer(region, many=True)
    return Response(serializer.data)


# S GET
@swagger_auto_schema(method='GET', responses={200: PokemonSerializer()})
@api_view(['GET'])
def pokemon_form_get(request, pk):
    try:
        pokemon = Pokemon.objects.get(pk=pk)
    except Pokemon.DoesNotExist:
        return Response({'error': 'Pokemon does not exist.'}, status=404)

    serializer = PokemonSerializer(pokemon)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: PokemonTrainerSerializer()})
@api_view(['GET'])
def pokemontrainer_form_get(request, pk):
    try:
        pokemontrainer = PokemonTrainer.objects.get(pk=pk)
    except PokemonTrainer.DoesNotExist:
        return Response({'error': 'Trainer does not exist.'}, status=404)

    serializer = PokemonTrainerSerializer(pokemontrainer)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: RegionSerializer()})
@api_view(['GET'])
def region_form_get(request, pk):
    try:
        region = Region.objects.get(pk=pk)
    except Region.DoesNotExist:
        return Response({'error': 'Region does not exist.'}, status=404)

    serializer = RegionSerializer(region)
    return Response(serializer.data)


# POST
@swagger_auto_schema(method='POST', request_body=PokemonSerializer, responses={200: PokemonSerializer()})
@api_view(['POST'])
def pokemon_form_create(request):
    data = JSONParser().parse(request)
    serializer = PokemonSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='POST', request_body=PokemonTrainerSerializer, responses={200: PokemonTrainerSerializer()})
@api_view(['POST'])
def pokemontrainer_form_create(request):
    data = JSONParser().parse(request)
    serializer = PokemonTrainerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='POST', request_body=RegionSerializer, responses={200: RegionSerializer()})
@api_view(['POST'])
def region_form_create(request):
    data = JSONParser().parse(request)
    serializer = RegionSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


# PATCH

@swagger_auto_schema(method='PATCH', request_body=PokemonSerializer, responses={200: PokemonSerializer()})
@api_view(['PATCH'])
def pokemon_form_update(request, pk):
    try:
        pokemon = Pokemon.objects.get(pk=pk)
    except Pokemon.DoesNotExist:
        return Response({'error': 'Pokemon does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = PokemonSerializer(pokemon, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PATCH', request_body=PokemonTrainerSerializer, responses={200: PokemonTrainerSerializer()})
@api_view(['PATCH'])
def pokemontrainer_form_update(request, pk):
    try:
        pokemontrainer = PokemonTrainer.objects.get(pk=pk)
    except PokemonTrainer.DoesNotExist:
        return Response({'error': 'Trainer does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = PokemonTrainerSerializer(pokemontrainer, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PATCH', request_body=RegionSerializer, responses={200: RegionSerializer()})
@api_view(['PATCH'])
def region_form_update(request, pk):
    try:
        region = Region.objects.get(pk=pk)
    except Region.DoesNotExist:
        return Response({'error': 'Region does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = RegionSerializer(region, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


# DELETE
@api_view(['DELETE'])
def pokemon_delete(requeset, pk):
    try:
        pokemon = Pokemon.objects.get(pk=pk)
    except Pokemon.DoesNotExist:
        return Response({'error': 'Pokemon does not exist.'}, status=404)
    pokemon.delete()
    return Response(status=204)


@api_view(['DELETE'])
def pokemontrainer_delete(requeset, pk):
    try:
        pokemontrainer = PokemonTrainer.objects.get(pk=pk)
    except PokemonTrainer.DoesNotExist:
        return Response({'error': 'Trainer does not exist.'}, status=404)
    pokemontrainer.delete()
    return Response(status=204)


@api_view(['DELETE'])
def region_delete(requeset, pk):
    try:
        region = Region.objects.get(pk=pk)
    except Region.DoesNotExist:
        return Response({'error': 'Region does not exist.'}, status=404)
    region.delete()
    return Response(status=204)
