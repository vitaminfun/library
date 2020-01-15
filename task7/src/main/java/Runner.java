import com.google.gson.Gson;
import etity.User;

public class Runner {
    public static void main(String[] args) {
        User user=new User("Dima","1234");
        Gson gson=new Gson();
        String json=gson.toJson(user);
        System.out.println(json);
        User dima=gson.fromJson(json,User.class);
        System.out.println("от json"+" "+dima);

    }
}
