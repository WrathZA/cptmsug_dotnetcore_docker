# Links if you're reading this
# https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/docker/building-net-docker-images
# https://hub.docker.com/_/microsoft-dotnet-core
# https://hub.docker.com/_/microsoft-dotnet-core-sdk/

# Use the SDK specifically for the build.
FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
# Specify a working folder so we're not messing with the root of the filesystem
WORKDIR /work

# Copy all solution files and projects to the working dir
# Note the .dockerignore file!
COPY . ./

RUN dotnet restore
# Specify which tests you want to run
RUN dotnet test ./Calc.Service.Tests 

WORKDIR /work/Calc.Service.Api
RUN dotnet publish -c Release -o ./dist

# Copy the dist folder from the build image to the runtime image!
# Whoa! Another image?!
FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS runtime
WORKDIR /app

# Notice the --from argument that allows us to copy from the previous image.
COPY --from=build /work/Calc.Service.Api/dist ./

# Expose port 8080 on the docker image
EXPOSE 8080 
# Set the enviroment variables to expose 8080
ENV ASPNETCORE_URLS=http://+:8080

CMD ["dotnet", "Calc.Service.Api.dll"]



#        ******       ******
#       **********   **********
#     ************* *************
#    *****************************
#    *****************************
#    *****************************
#     ***************************
#       ***********************
#         *******************
#           ***************
#             ***********
#               *******
#                 ***
#                  *
#
#                     ##         .
#               ## ## ##        ==
#            ## ## ## ## ##    ===
#        /"""""""""""""""""\___/ ===
#   ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~
#        \______ o           __/
#          \    \         __/
#           \____\_______/

