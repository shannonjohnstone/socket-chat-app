# **Chatty**

Chatty is a chat application built for the purpose of learning that may turn into something more in the future.

Current gotcha's with this project are;

- when install packages please use npm instead of yarn as there seems to be an issue with install socket.io with yarn

## **Reason for ejecting from create-react-app**
create-react-app comes with webpack and react scripts which hides all the webpack configuration so you do not need to worry about setting up webpack.

In the case of this application we have used the `eject` script so that all those hidden files are exposed for greater configuration control in this area.

The main reason being is that `webpack-dev-server` has a hot-reloading configuration but that does not seem to work with `socket.io`. The result of this being that when it tried to reload the connection for `socket.io` fails and then discounts and then causing the socket instance to be undefined breaking the application.

So we have setup this application to work with `webpack-dev-middleware` and `webpack-hot-middleware` to give the same results but to also not break with the hot module replacement.

## **Current API being used**
https://github.com/shannonjohnstone/chatty-api
