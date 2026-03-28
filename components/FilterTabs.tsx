import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { FILTER_OPTIONS, FilterOptions } from '../constants/tasks'

type FilterTabProps ={
    selected: FilterOptions,
    onSelect: (filter: FilterOptions) => void,
}

const FilterTabs = ({selected, onSelect}:FilterTabProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
        {FILTER_OPTIONS.map((option)=> {
            const isSelected = selected === option;
            return (
                <TouchableOpacity key={option} style={[styles.tab, isSelected && styles.tabSelected]} onPress={()=> onSelect(option)}>
                    <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>{option}</Text>
                </TouchableOpacity>
            )
        })}
    </ScrollView>
  )
}

export default FilterTabs

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 12,
  },
  tab: {
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textSecondary,
  },
  tabTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});