FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /work
COPY . ./
RUN dotnet restore

# We WOULD run the tests here!
# RUN dotnet test

# Only build and publish the API and it's deps
WORKDIR /work/NorthWind.Api/
RUN dotnet publish -c Release -o ./dist

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS runtime
WORKDIR /app

COPY --from=build /work/NorthWind.Api/dist ./

EXPOSE 8080 
ENV ASPNETCORE_URLS=http://+:8080

CMD ["dotnet", "NorthWind.Api.dll"]