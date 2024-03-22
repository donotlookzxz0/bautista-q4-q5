from django.urls import path
from base.views.user_views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('profile/', getUserProfile, name='user-profile'),
    path('', getUsers, name='users'),
    path('register/', registerUser, name='register'),
    path('profile/update/', updateUserProfile, name='user-profile-update'),
    path('create-a-product/', create_user_product, name='create_user_product'),
    
]