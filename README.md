 git clone https://github.com/ShmelyovOleg/RSS_test.git

 in your editor terminal:

    cd src/client

    npm i

    cd ../server  

    npm i

    cd ../..

 create .env file by example (.env.example)

 run your docker client

 in your editor terminal:
    make build
    make up

 after ~60sec you can see:
 http://localhost:5000/api/posts - server part
 http://localhost:3000/ - client part


Also yo can :
make down - turn off your containers 
make restart - restart your containers
make logs - to see logs