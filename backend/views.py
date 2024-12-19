from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth import authenticate, login
from .models import FormRequest, IzinJam
from .serializers import FormRequestSerializer, IzinJamSerializer

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        batch_id = request.data.get('batch_id')
        user = authenticate(request, username=username, batch_id=batch_id)
        if user:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class FormRequestView(APIView):
    def post(self, request):
        serializer = FormRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        forms = FormRequest.objects.filter(user=request.user)
        serializer = FormRequestSerializer(forms, many=True)
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        batch_id = request.data.get('batch_id')

        user = authenticate(request, username=username, batch_id=batch_id)
        if user:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    
class IzinJamListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        # Retrieve all Izin Jam requests for the logged-in user
        izin_jam_requests = IzinJam.objects.filter(user=request.user)
        serializer = IzinJamSerializer(izin_jam_requests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # Create a new Izin Jam request
        serializer = IzinJamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # Set the user automatically
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)