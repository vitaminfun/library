package etity;

import java.util.ArrayList;
import java.util.List;

public class DataStore {
    private static final DataStore instance = new DataStore();
    private final List<User> users = new ArrayList<>();

    private DataStore(){}

    public static DataStore getInstance() {
        return instance;
    }

    public List<User> getUsers() {
        return users;
    }

    public String addUser(User userFromJson) {

        if (users.isEmpty()) {
            users.add(userFromJson);
            return "Success Registration";
        } else {
            for (User user : users) {
                if (user.getLogin().equals(userFromJson.getLogin()) && user.getPassword().equals(userFromJson.getPassword())) {
                    return "try registration again";
                }
            }
            System.out.println(users.toString());
            users.add(userFromJson);
            return "Success Registration";

        }

    }
    public String checkUser(User userFromJson){
        if (users.isEmpty()) {
            return "You are not registered yet";
        } else {
            for (User user : users) {
                if (user.getLogin().equals(userFromJson.getLogin()) && user.getPassword().equals(userFromJson.getPassword())) {
                    return "Welcome to site";
                }
            }
            System.out.println(users.toString());
            return "The user with the given name does not exist";

        }
    }
}
