import { Text, View } from "react-native";

export default function MinMax(props) {
    const { min, max} = props;

    const maxValue = Math.max(parseInt(min),parseInt(max));

    return(
        <Text>
            O valor máximo é: {maxValue}
        </Text>
    );
}
  
