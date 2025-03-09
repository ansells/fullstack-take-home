from django.db import models

# Create your models here.
ROLES = [("ADMIN", "Admin"), ("REGULAR", "Regular")]


class TeamMember(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, choices=ROLES, default="regular")
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=100)
