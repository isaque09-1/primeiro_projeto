import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import me from '../../../assets/me.jpg';

export default function Atividade() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container}>
                    
                    <View style={styles.header}>
                        <Image source={me} style={styles.profileImage} />
                        
                        <View style={styles.headerInfo}>
                            <Text style={styles.name}>Isaque Tornquist</Text>
                            <Text style={styles.subtitle}>16 anos</Text>
                            <Text style={styles.subtitle}>Marechal Rondon, PR</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>1. INFORMAÇÕES PESSOAIS</Text>
                        <Text style={styles.text}>
                            Atualmente cursando, busco minha primeira oportunidade no mercado de trabalho para aplicar meus conhecimentos em <Text style={styles.bold}>programação</Text> e evoluir em equipe.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>2. OBJETIVO</Text>
                        <Text style={styles.text}>
                            Seguir na área de tecnologia e futuramente ser um <Text style={styles.bold}>desenvolvedor de software</Text>. Tenho flexibilidade de horários e financeira.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>3. COMPETÊNCIAS</Text>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Python</Text>, Java, JavaScript, <Text style={styles.bold}>Git</Text>, <Text style={styles.bold}>GitHub</Text>, HTML, CSS e React.
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#EFEFEF",
    },
    container: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,

    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000",
    },
    headerInfo: {
        marginLeft: 20,
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        marginTop: 2,
    },
    card: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 8,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        color: "#333",
    },
    bold: {
        fontWeight: "bold",
        color: "#000",
    }
});
