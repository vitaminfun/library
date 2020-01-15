package servlet;

import com.google.gson.Gson;
import etity.DataStore;
import etity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "ServletReg")
public class ServletReg extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson=new Gson();

        BufferedReader reader = request.getReader();
        String jsonUser=reader.readLine();

        System.out.println("Привет" +" "+jsonUser);

        User user=gson.fromJson(jsonUser,User.class);

        String reqUser=gson.toJson(user);


        DataStore dataStore=DataStore.getInstance();
        List<User> users=dataStore.getUsers();

        String req = dataStore.addUser(user);

        response.getWriter().print(req);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
