from django.urls import path, include
from rest_framework.routers import DefaultRouter
from team_api import views

router = DefaultRouter()
router.register("members", views.TeamMemberViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
