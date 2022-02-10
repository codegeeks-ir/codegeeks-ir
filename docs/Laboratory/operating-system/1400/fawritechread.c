#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>


int arr[50000];
int flag[2]={0,0};
int turn;

int main(int argc, char** argv) {
    char name[20];
    char outp[50];

    FILE *file;
    file = fopen("dati.txt", "w+");

    pid_t pid;
    pid=fork();
    if(pid>0){
        //fatther proccess
        printf("Father");
        printf("Insert name: ");
        scanf("%s",name);
        fprintf(file, "%s", name);
        fclose(file);
        exit(0);
    }else{
        //child proccess
        sleep(5);
        printf("Child ");
        file = fopen("dati.txt", "r");
        fgets(outp, 50, file);
        printf("Read string: %s", outp);        
        fclose(file);
        exit(0);
    }
    return 0;
}
