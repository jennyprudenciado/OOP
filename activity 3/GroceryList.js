import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "../styles/groceryStyles";
import {
  categories,
  categoryEmojis,
  defaultGroceries,
} from "../data/groceryData";

export default function GroceryList() {
  const [groceries, setGroceries] = useState(
    defaultGroceries
  );
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [selectedQuantity, setSelectedQuantity] =
    useState("1");

  // Filter groceries by category
  const filteredGroceries =
    selectedCategory === "All"
      ? groceries
      : groceries.filter(
          (item) => item.category === selectedCategory
        );

  // Add a new grocery item
  const addGrocery = () => {
    if (input.trim() === "") {
      alert("Please enter an item name");
      return;
    }

    const newGrocery = {
      id: Date.now().toString(),
      name: input,
      quantity: parseInt(selectedQuantity) || 1,
      category: selectedCategory === "All" ? "Pantry" : selectedCategory,
      purchased: false,
    };

    setGroceries([...groceries, newGrocery]);
    setInput("");
    setSelectedQuantity("1");
  };

  // Delete a grocery item
  const deleteGrocery = (id) => {
    setGroceries(
      groceries.filter((item) => item.id !== id)
    );
  };

  // Toggle purchased status
  const togglePurchased = (id) => {
    setGroceries(
      groceries.map((item) =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setGroceries(
      groceries.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Render each grocery item
  const renderGroceryItem = ({ item }) => (
    <View style={styles.groceryItem}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => togglePurchased(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.purchased && styles.checkboxPurchased,
          ]}
        >
          {item.purchased && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.itemDetails}>
        <View style={styles.itemHeader}>
          <Text style={styles.categoryEmoji}>
            {categoryEmojis[item.category] || "📦"}
          </Text>

          <Text
            style={[
              styles.itemName,
              item.purchased && styles.itemNamePurchased,
            ]}
          >
            {item.name}
          </Text>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryLabel}>
              {item.category}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.quantityControl}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() =>
            updateQuantity(item.id, item.quantity - 1)
          }
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() =>
            updateQuantity(item.id, item.quantity + 1)
          }
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteGrocery(item.id)}
      >
        <Text style={styles.deleteButtonText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  const purchasedCount = groceries.filter(
    (item) => item.purchased
  ).length;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#27AE60"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛒 Grocery List</Text>
        <Text style={styles.headerSubtitle}>
          {purchasedCount} of {groceries.length} items
          purchased
        </Text>
      </View>

      {/* Category filter */}
      <View style={styles.categoryFilterSection}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoryFilterList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryFilter,
                selectedCategory === item &&
                  styles.categoryFilterActive,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryFilterText,
                  selectedCategory === item &&
                    styles.categoryFilterTextActive,
                ]}
              >
                {categoryEmojis[item]} {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Input section */}
      <View style={styles.inputSection}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Add item..."
            placeholderTextColor="#95A5A6"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={addGrocery}
          />

          <View style={styles.quantityInputContainer}>
            <Text style={styles.quantityLabel}>Qty:</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder="1"
              placeholderTextColor="#95A5A6"
              value={selectedQuantity}
              onChangeText={setSelectedQuantity}
              keyboardType="number-pad"
              maxLength={3}
            />
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={addGrocery}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Grocery list */}
      {filteredGroceries.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>🎉</Text>
          <Text style={styles.emptyTitle}>
            {selectedCategory === "All"
              ? "No items yet"
              : `No ${selectedCategory.toLowerCase()}`}
          </Text>
          <Text style={styles.emptyText}>
            Add an item to get started!
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredGroceries}
          keyExtractor={(item) => item.id}
          renderItem={renderGroceryItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Summary footer */}
      {groceries.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>
              {groceries.length}
            </Text>
            <Text style={styles.summaryLabel}>Total Items</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>
              {purchasedCount}
            </Text>
            <Text style={styles.summaryLabel}>Purchased</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>
              {groceries.length - purchasedCount}
            </Text>
            <Text style={styles.summaryLabel}>Remaining</Text>
          </View>
        </View>
      )}
    </View>
  );
}