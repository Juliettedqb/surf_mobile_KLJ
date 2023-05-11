import { Text } from "react-native";
import { Spot } from "./List";

interface DetailProps {
  item: Spot;
  onClick: () => void;
}

const Detail = ({ item, onClick }: DetailProps) => {
  return <Text onPress={onClick}>{item.title}</Text>;
};

export default Detail;
