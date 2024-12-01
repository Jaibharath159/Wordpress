import { usePosts } from "@storage/hooks/usePosts"; // Adjust the import path based on your project structure
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const CategoriesPage: React.FC = () => {
  const { posts, loading, error } = usePosts();
  console.log(posts);
  useEffect(() => {
    // Do something with posts, loading, error
  }, [posts, loading, error]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Categories!</Text>
    </View>
  );
};

export default CategoriesPage;
