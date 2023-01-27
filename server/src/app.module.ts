import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './files/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(
            'mongodb+srv://quick-music-fs:quick-music-fs1234@cluster0.dj1syik.mongodb.net/quick-music-fs?retryWrites=true&w=majority',
        ),
        TrackModule,
        FileModule,
    ],
})
export class AppModule {}
