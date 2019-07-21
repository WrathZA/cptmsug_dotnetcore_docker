FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /work
COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o ./dist

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS runtime
WORKDIR /app
COPY --from=build /work/dist ./
CMD dotnet NorthWind.Data.Migrations.dll