#include <iostream>
#include <stdio.h>

//On déclare des constantes pour les cases
#define VIDE ' '
#define NOIR 'X'
#define BLANC 'O'
//On déclare des constantes pour la taille du plateau
#define TAILLE 8



int main() {
    //On veut créer un jeu d'Othello en C++
//On commence par afficher le menu
    int choix;
    printf("Bienvenue dans le jeu d'Othello\n");
    printf("1. Commencer une partie\n");
    printf("2. Quitter\n");
    scanf("%d", &choix);
    //On crée le plateau de jeu
    char plateau[TAILLE][TAILLE];
    //On initialise le plateau de jeu
    for (int i = 0; i < TAILLE; i++) {
        for (int j = 0; j < TAILLE; j++) {
            plateau[i][j] = VIDE;
        }
    }
    //On initialise le plateau de jeu avec les pions
    plateau[3][3] = NOIR;
    plateau[3][4] = BLANC;
    plateau[4][3] = BLANC;
    plateau[4][4] = NOIR;
    //On affiche le plateau de jeu
    for (int i = 0; i < TAILLE; i++) {
        for (int j = 0; j < TAILLE; j++) {
            printf("%c", plateau[i][j]);
        }
        printf("\n");
    }
    //On crée une condition de victoire :
    //Si le nombre de pions noirs est supérieur au nombre de pions blancs, le joueur Noir gagne
    //Si le nombre de pions blancs est supérieur au nombre de pions noirs, le joueur Blanc gagne
    //Boucle de jeu

    while (choix == 1) {
        //On demande au joueur Noir de choisir une case
        printf("Au tour du joueur Noir\n");
        int x, y;
        printf("Entrez la ligne : ");
        scanf("%d", &x);
        printf("Entrez la colonne : ");
        scanf("%d", &y);
        //On vérifie si la case est vide
        if (plateau[x][y] == VIDE) {
            //On place le pion noir
            plateau[x][y] = NOIR;
        } else {
            //On affiche un message d'erreur
            printf("Cette case est déjà occupée\n");
        }
        //On affiche le plateau de jeu
        for (int i = 0; i < TAILLE; i++) {
            for (int j = 0; j < TAILLE; j++) {
                printf("%c", plateau[i][j]);
            }
            printf("\n");
        }
        //On demande au joueur Blanc de choisir une case
        printf("Au tour du joueur Blanc\n");
        printf("Entrez la ligne : ");
        scanf("%d", &x);
        printf("Entrez la colonne : ");
        scanf("%d", &y);
        //On vérifie si la case est vide
        if (plateau[x][y] == VIDE) {
            //On place le pion blanc
            plateau[x][y] = BLANC;
        } else {
            //On affiche un message d'erreur
            printf("Cette case est déjà occupée\n");
        }
        //On affiche le plateau de jeu une nouvelle fois
        for (int i = 0; i < TAILLE; i++) {
            for (int j = 0; j < TAILLE; j++) {
                printf("%c", plateau[i][j]);
            }
            printf("\n");
        }

    }



            return 0;

    }