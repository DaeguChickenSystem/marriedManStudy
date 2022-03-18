package com.mariied.study.dto.board;

import com.mariied.study.entity.board.Board;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@ToString
public class BoardResponseDto {
    private Long id;
    private String title;
    private String content;
    private int readCnt;
    private String registerId;
    private LocalDateTime registerTime;

    public BoardResponseDto(Board entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.readCnt = entity.getReadCnt();
        this.registerId = entity.getRegisterId();
        this.registerTime = entity.getRegisterTime();
    }

}
