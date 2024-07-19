import {createStackNavigator} from '@react-navigation/stack';
import ProductList from "../screens/Products/Product-list";
import User from "../screens/User/User";
import ProductItem from "../screens/Products/Product";
import Company from "../screens/Products/Company";

const Stack = createStackNavigator();

const screenOptions = (props) => {
    return {
        title: props.route.params?.title,
    }
}

export function Product() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Store" component={ProductList}/>
            <Stack.Screen name="Product"
                          children={(props) => <ProductItem {...props} />}
                          options={screenOptions}
            />
            <Stack.Screen name="Company"
                          children={(props) => <Company {...props} />}
                          options={screenOptions}
            />
        </Stack.Navigator>
    );
}

export function Users() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UsersStack" component={User}/>
        </Stack.Navigator>
    );
}

export function Favourites() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavouritesStack" component={Favourites}/>
        </Stack.Navigator>
    );
}
