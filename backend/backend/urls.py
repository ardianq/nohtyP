"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from nothyP import views

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pokemon/list', views.pokemon_list),
    path('pokemon/create', views.pokemon_form_create),
    path('pokemon/<int:pk>/get', views.pokemon_form_get),
    path('pokemon/<int:pk>/update', views.pokemon_form_update),
    path('pokemon/<int:pk>/delete', views.pokemon_delete),
    path('pokemontrainer/list', views.pokemontrainer_list),
    path('pokemontrainer/create', views.pokemontrainer_form_create),
    path('pokemontrainer/<int:pk>/get', views.pokemontrainer_form_get),
    path('pokemontrainer/<int:pk>/update', views.pokemontrainer_form_update),
    path('pokemontrainer/<int:pk>/delete', views.pokemontrainer_delete),
    path('region/list', views.region_list),
    path('region/create', views.region_form_create),
    path('region/<int:pk>/get', views.region_form_get),
    path('region/<int:pk>/update', views.region_form_update),
    path('region/<int:pk>/delete', views.region_delete),
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
