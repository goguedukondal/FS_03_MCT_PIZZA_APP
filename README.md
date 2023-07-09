This is Pizza app where user can order pizza easily.The App contained some pages they are like Home,Menu,Order,View Pizza and OrderSuccess Pages mainly.
The user can move from one page to other pages dynamically with the help of react-router-dom which is third party libray.
Intially when my app loads Home page will render in UI.
In my apllication i have implemented redux which is a third party Library.
I have created Redux Store. So , when my Home page renders I am fetching data from API endpoint inside useEffect hook with the help of axios which is third party library
and storing that data from API to redux store. This functionality is done by using dispatch function which accepts a action object(action object contains one mandatory property called type So that based on type reducer understands what updates have to do into the store and from which component needs service, in the same way we can also send data from component to the store with the help of Payload property of action object). Hence , I am sending data from Home component to the Redux Store with the help of payload Property of Action Object.
Before Sending data to the Redux Store I am checking ,whether that data is in Store or Not ,If not then i will send otherwiise i wont fetch data from api itself.
Now data is in the Store So , that data is avialable to all the components which are Wrapped inside Povider component which is imported from react-redux library.
So when i click on MENU Link in the nav Menu Component is Rendered.
Inside Menu Component I am accessing data from ReduxStore with the help of useSelector hook which returns reduxStore data .useSelector and useDispatch are imported from react-redux library.
Inside Home Component onScrolling down we can see all pizzas . I got this data with the  help of useSelector hook that we have seen already in Menu Component earlier.
The pizzas is a Array which caontains some Object each object contians separate pizza information.
So, to get each Pizza information in my UI i have looped on Pizza Array with the help of map method which is a Array methode.
Onhovering on each pizza we can see two buttons they are Quick View and Add to Cart. 
On Clicking Quick it routes to View Component and sending particular pizza id to route(path url).this is done by using Link Component which is imported from react-router-dom . So that particular pizza id is displayed in url in our browser.
When View Component renders we can access that id from url by using useParams hook .
After getting that id we can filter out related pizza information from Pizza Array which is  from Redux Store, with the help of Array method find.
After that i can store that filtered object in a state variable with the help of useState hook and i have showed in UI.
In View  component along with particular pizza information we can see Add to cart button onClicking on that button Order page is rendered with the help of useNavigate hook. In Order Component we can see Form where user can provide data to us . I  am storing those data in tha form of object with the help of useRef Hook.
As in Project it is not mentioned more about it So , I have done upto that part only in Form.
In Order Component we can see OrderNow Button . OnClicking on that button it is rendered to OrderSuccessFull page with the help of useNavigate hook.
Inside OrderSuccessful Page we can see an animation like delivery bike is moving .This is done by using third party Library (framer motion) and useState Concept.
Thats all about my Project .
##In my Project I have used Chakra UI which is third party Library for designing CSS Part.
Thank You....



