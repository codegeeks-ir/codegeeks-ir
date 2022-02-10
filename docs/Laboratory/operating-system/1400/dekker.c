#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdbool.h>
#include <sys/mman.h>


int Maxc=100;
void Parent()
{
        int i;
        for (i=1;i<=Maxc;i++)
                printf("from Parent %d \n",i);
        printf("*****parent is done!*******\n");
}
void Child()
{
        int i;
        for (i=1;i<=Maxc;i++)
                printf("from Child  %d \n",i);
        printf("*****parent is done!*******\n");
}

int main(int argc, char** argv) {
    int N=2;
    int T=1;
    int *flag = mmap(NULL,N*sizeof(int),PROT_READ | PROT_WRITE,MAP_SHARED | MAP_ANONYMOUS,0,0); 
    int *turn = mmap(NULL,T*sizeof(int),PROT_READ | PROT_WRITE,MAP_SHARED | MAP_ANONYMOUS,0,0); 
    for(int i=0; i<N; i++){
            flag[i] = 0;
    }
    turn[0]=0;
    pid_t pid;
    pid=fork();
    if(pid>0){
        //fatther proccess
        flag[0]=1;    
        while(flag[1])
        {
            if(turn[0]!=0)
            {
                flag[0]=0;
                while(turn[0]!=0)
                {
                     printf("parent wait\n");
                }
                flag[0]=1;
            } 
        }
        Parent();
        printf("Parent DONE!!!! \n");
        printf("--------------------------------------------- \n");
        turn[0]=1;
        flag[0]=0;

        exit(0);
    }else{
        //child proccess
        printf("****hey child****\n");
        flag[1]=1;
        while(flag[0])
        {
            if (turn[0]!=1)
            {
                flag[1]=0;
                while(turn[0]!=1)
                {
                        printf("child wait\n");
                }
                flag[1]=1;
            }
        }

        Child();
        turn[0]=0;
        flag[1]=0;
        printf("end child ");
        exit(0);
    }
    return 0;
}
