import { ActivityIndicator, View } from "react-native"

const Indicator = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
    </View>
}

export default Indicator
