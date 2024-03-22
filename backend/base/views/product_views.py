from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.models import Product
from base.serializer import ProductSerializer

@api_view(['GET'])
def getProducts(request):
    category = request.query_params.get('category', None)
    if category:
        products = Product.objects.filter(category=category)
    else:
        products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    try:
        product = Product.objects.get(_id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response(status=404)

@api_view(['PUT'])
def updateProduct(request, pk):
    try:
        product = Product.objects.get(_id=pk)
    except Product.DoesNotExist:
        return Response(status=404)

    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=400)

