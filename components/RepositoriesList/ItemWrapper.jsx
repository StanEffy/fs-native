import React from "react";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";

const ItemWrapper = ({ children, id }) => {
  const navigate = useNavigate();
  const handlePress = () => navigate(`/${id}`);
  return <Pressable onPress={handlePress}>{children}</Pressable>;
};

export default ItemWrapper;
