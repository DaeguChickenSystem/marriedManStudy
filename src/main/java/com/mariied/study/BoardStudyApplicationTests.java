package com.mariied.study;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.mariied.study.dto.board.BoardRequestDto;
import com.mariied.study.dto.board.BoardResponseDto;
import com.mariied.study.service.BoardService;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BoardStudyApplicationTests {

    @Autowired
    private BoardService boardService;

    @Test
    public void save() {
        BoardRequestDto boardSaveDto = new BoardRequestDto();

        boardSaveDto.setTitle("제목입니다.");
        boardSaveDto.setContent("내용입니다.");
        boardSaveDto.setRegisterId("작성자");

        Long result = boardService.save(boardSaveDto);

        if(result > 0) {
            System.out.println("# Success save() -");
            findAll();
            findById(result);
        } else {
            System.out.println("# Fail Save() -");
        }
    }

    public void findAll() {
        List<BoardResponseDto> list = boardService.findAll();

        if(list != null) {
            System.out.println("# Success findAll() : " + list.toString());
        } else {
            System.out.println("# Fail findAll() -");
        }
    }

    public void findById(Long id) {
        BoardResponseDto info = boardService.findById(id);

        if(info != null) {
            System.out.println("# Success findById() : " + info.toString());
            updateBoard(id);
        } else {
            System.out.println("# Fail findById() -");
        }
    }

    public void updateBoard(Long id) {
        BoardRequestDto boardRequestDto = new BoardRequestDto();

        boardRequestDto.setId(id);
        boardRequestDto.setTitle("업데이트 제목");
        boardRequestDto.setContent("업데이트 내용");
        boardRequestDto.setRegisterId("작성자");

        int result = boardService.updateBoard(boardRequestDto);

        if(result > 0) {
            System.out.println("# Success updateBoard() -");
        } else {
            System.out.println("# Fail updateBoard()-");
        }
    }
}
