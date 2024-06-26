import React,{useEffect} from 'react'
import { ROUTE } from '../navigation/constant';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
   
        if (false) {
          navigation.replace(ROUTE.TAB);
        } else {
          navigation.replace(ROUTE.AUTH);
        }
    
    }, []);
  return <></>
}

export default Splash;
